<script>
export default {
	data() {
		return {
			loading: false,
			name: null,
			lastname: null,
			dni: null,
			dniError: false,
			phone: null,
			phoneError: false,
			email: null,
			emailError: null,
			department: null,
			message: null,
			direction: null,
			authorized: false
		};
	},
	computed: {
		disabledSendButton() {
			return !this.name || !this.lastname || !this.dni || !this.phone || !this.email || !this.department || !this.message || !this.direction || !this.authorized || this.emailError || this.dniError || this.phoneError;
		},
		envAPI() {
			const apiUrl = `${import.meta.env.VITE_URL}/contact`;

			return apiUrl;
		}
	},
	methods: {
		handleInput(event) {
			const input = event.target.value;
			const numericInput = input.replace(/[^0-9]/g, ''); // Eliminar caracteres no numéricos
			this.dni = numericInput; // Actualizar el valor del modelo
		},
		validateEmail() {
			const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

			if (!emailPattern.test(this.email)) {
				this.emailError = true;
			} else {
				this.emailError = false;
			}
		},
		validateDNI() {
			const dniPattern = /^\d*$/;

			if (!dniPattern.test(this.dni)) {
				this.dniError = true;
			} else {
				this.dniError = false;
			}
		},
		validatePhone() {
			const phonePattern = /^\d*$/;

			if (!phonePattern.test(this.phone)) {
				this.phoneError = true;
			} else {
				this.phoneError = false;
			}
		},
		clickSendButton() {
			this.loading = true;
		},
		resetForm() {
			this.name = null;
			this.lastname = null;
			this.dni = null;
			this.phone = null;
			this.email = null;
			this.emailError = null;
			this.department = null;
			this.message = null;
			this.direction = null;
			this.authorized = false;
		},
		handleSubmit(event) {
			this.loading = true;

			const form = event.target;
			const formData = new FormData(form);

			fetch('https://formsubmit.co/ajax/fernandojaviergonzalez2018@gmail.com', {
				method: 'POST',
				body: formData,
				headers: { 'Accept': 'application/json' }
			})
				.then(response => {
					if (response.status === 200) {
						this.$toast.add({
							severity: 'success',
							summary: '¡El formulario se ha enviado exitosamente!',
							detail: 'En breve nos pondremos en contacto para brindarte más información',
							life: 5000
						});
						this.resetForm();
					} else {
						this.$toast.add({
							severity: 'error',
							summary: '¡Hubo un problema al enviar el formulario!',
							detail: 'Por favor, volvé a intentar en unos instantes',
							life: 5000
						});
					}
				})
				.catch(error => {
					this.$toast.error('Hubo un problema al enviar el formulario.');
				})
				.finally(() => {
					this.loading = false;
				});
		}
	}
};
</script>

<template>
	<div class="main-container">
		<form @submit.prevent="handleSubmit">
			<div class="row">
				<div class="item-form">
					<label for="name">
						<span class="required"> * </span>
						{{ $t('CONTACT.CONTACT_FORM.NAME') }}
					</label>
					<InputText
						id="name"
						v-model="name"
						name="name"
					/>
				</div>

				<div class="item-form">
					<label for="lastname">
						<span class="required"> * </span>
						{{ $t('CONTACT.CONTACT_FORM.LAST_NAME') }}
					</label>
					<InputText
						id="lastname"
						v-model="lastname"
						name="lastname"
					/>
				</div>
			</div>

			<div class="row">
				<div class="item-form">
					<label for="dni">
						<span class="required"> * </span>
						{{ $t('CONTACT.CONTACT_FORM.DNI') }}
					</label>
					<InputText
						id="dni"
						v-model="dni"
						inputId="locale-user"
						locale="de-DE"
						name="dni"
						:invalid="dniError"
						@blur="validateDNI()"
					/>
					<small
						id="username-help"
						class="required"
						v-if="dniError"
					>
						{{ $t('CONTACT.CONTACT_FORM.INVALID_DNI') }}
					</small>

				</div>

				<div class="item-form">
					<label for="phone">
						<span class="required"> * </span>
						{{ $t('CONTACT.CONTACT_FORM.PHONE') }}
					</label>
					<InputText
						id="phone"
						v-model="phone"
						:useGrouping="false"
						name="phone"
						:invalid="phoneError"
						@blur="validatePhone()"
					/>
					<small
						id="username-help"
						class="required"
						v-if="phoneError"
					>
						{{ $t('CONTACT.CONTACT_FORM.INVALID_PHONE') }}
					</small>
				</div>
			</div>

			<div class="row">
				<div class="item-form">
					<label for="email">
						<span class="required"> * </span>
						{{ $t('CONTACT.CONTACT_FORM.EMAIL') }}
					</label>
					<InputText
						id="email"
						v-model="email"
						@blur="validateEmail()"
						:invalid="emailError"
						name="email"
					/>
					<small
						id="username-help"
						v-if="emailError"
						class="required"
					>
						{{ $t('CONTACT.CONTACT_FORM.INVALID_EMAIL') }}
					</small>
				</div>

				<div class="item-form">
					<label for="department">
						<span class="required"> * </span>
						{{ $t('CONTACT.CONTACT_FORM.DEPARTMENT') }}
					</label>
					<InputText
						id="department"
						v-model="department"
						name="department"
					/>
				</div>
			</div>

			<div class="row">
				<div class="item-form">
					<label for="direction">
						<span class="required"> * </span>
						{{ $t('CONTACT.CONTACT_FORM.DIRECTION') }}
					</label>
					<InputText
						id="direction"
						v-model="direction"
						name="direction"
					/>
				</div>

				<div class="item-form">
					<label for="message">
						<span class="required"> * </span>
						{{ $t('CONTACT.CONTACT_FORM.MESSAGE') }}
					</label>
					<Textarea
						v-model="message"
						rows="5"
						cols="21"
						name="message"
					/>
				</div>
			</div>

			<div class="row">
				<Checkbox
					id="authorized"
					v-model="authorized"
					:binary="true"
				/>
				<label
					for="authorized"
					class="authorized-message"
				>
					{{ $t('CONTACT.CONTACT_FORM.AUTHORIZED_MESSAGE') }}
				</label>
			</div>

			<input type="hidden" name="_captcha" value="false">
			<input type="hidden" name="_next" :value="envAPI">

			<div class="row separator"></div>

			<div class="row send-row">
				<Button
					label="Enviar"
					type="submit"
					:loading="loading"
					:disabled="disabledSendButton"
					@click="clickSendButton()"
				/>
			</div>

		</form>

		<Toast />
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.main-container {
		padding: 30px;
		.row {
			display: flex;
			margin-top: 20px;
			.item-form {
				display: flex;
				flex-direction: column;
				margin-left: 20px;
				.required {
					color: var(--instagram);
				}
			}
			.authorized-message {
				margin-left: 10px;
			}
		}
		.separator {
			border: 1px solid var(--grey);
		}
		.send-row {
			display: flex;
			flex-direction: row-reverse;
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.main-container {
		padding: 30px;
		.row {
			margin-top: 20px;
			width: 100%;
			.item-form {
				display: flex;
				flex-direction: column;
				margin-top: 20px;
				.input-number {
					.p-inputnumber-input {
						width: 10% !important;
					}
				}
				.required {
					color: var(--instagram);
				}
			}
			.authorized-message {
				margin-left: 10px;
			}
		}
		.separator {
			border: 1px solid var(--grey);
		}
		.send-row {
			display: flex;
			flex-direction: row-reverse;
		}
	}
}

</style>