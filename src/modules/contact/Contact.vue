<script>
import TitleSubtitle from '../../components/TitleSubtitle.vue';

import ContactForm from './ContactForm.vue';
import Contact from './images/contact.svg';

export default {
	name: 'ContactComponent',
	components: {
		ContactForm,
		TitleSubtitle
	},
	data() {
		return { Contact: Contact };
	}
};
</script>

<template>
	<div class="contact-main-container">
		<div class="contact-label-container">
			<TitleSubtitle
				:title="$t('CONTACT.LABEL')"
			/>
		</div>
		<div class="image-contact-container">
			<img :src="Contact" class="image-contact">
		</div>
		<div class="form-container">
			<h3>
				{{ $t('CONTACT.COMPLETE_FORM') }}
			</h3>
			<p class="required-fields-label">
				<span class="astherics">*</span>
				{{ $t('CONTACT.REQUIRED_FIELDS') }}
			</p>
			<div class="form-content-container">
				<ContactForm />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.contact-main-container {
		padding: 20px;
		.image-contact-container {
			margin-top: 20px;
			.image-contact {
				width: 100%;
			}
		}
		.form-container {
			.required-fields-label {
				.astherics {
					color: var(--instagram);
				}
			}
			.form-content-container {
				width: 70%;
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.contact-main-container {
		padding: 20px;
		.image-contact-container {
			margin-top: 20px;
			.image-contact {
				width: 100%;
			}
		}
		.form-container {
			.required-fields-label {
				.astherics {
					color: var(--instagram);
				}
			}
			.form-content-container {
				width: 100%;
			}
		}
	}
}

</style>