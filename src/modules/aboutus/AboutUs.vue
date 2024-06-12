<script>
import TitleSubtitle from '../../components/TitleSubtitle.vue';

import AboutUs from './images/about-us.svg';
import DarkMarker from './images/dark-marker.png';
import LightMarker from './images/light-marker.png';
import OriginalMarker from './images/original-marker.png';

export default {
	components: { TitleSubtitle },
	data() {
		return {
			AboutUs: AboutUs,
			DarkMarker: DarkMarker,
			LightMarker: LightMarker,
			OriginalMarker: OriginalMarker,
			map: null,
			marker: null,
			position: {
				lat: -27.652351995912433,
				lng: -62.410156349737534
			},
			days: [
				"Lun",
				"Mar",
				"Miér",
				"Jue",
				"Vie",
				"Sab"
			]
		};
	},
	mounted() {
		this.map = new google.maps.Map(this.$refs.mapContainer, {
			center: this.position,
			zoom: 16
		});

		let icon = {
			url: this.LightMarker,
			scaledSize: new google.maps.Size(100, 100),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(40, 100)
		};

		this.marker = new google.maps.Marker({
			position: this.position,
			map: this.map,
			icon: icon
		});
	}
};
</script>

<template>
	<div class="about-us-main-container">
		<div class="title-container">
			<TitleSubtitle
				:title="$t('ABOUT_US.TITLE')"
				class="title-subtitle"
			/>
		</div>

		<div class="img-container">
			<img :src="AboutUs">
		</div>

		<div class="description-container">
			<h3>
				{{ $t('ABOUT_US.LALO_AUTOMOTORES') }}
			</h3>

			<p>
				{{ $t('ABOUT_US.DESCRIPTION') }}
			</p>
		</div>

		<div class="title-container">
			<TitleSubtitle
				:title="$t('ABOUT_US.WHERE_WE_ARE_TITLE')"
				class="title-subtitle"
			/>
		</div>

		<div class="map-main-container">
			<h3 class="ubication-legend">
				{{ $t('ABOUT_US.UBICATION') }}
			</h3>

			<div ref="mapContainer" class="map-container" />

			<div class="information-container">
				<div class="address-container item-container">
					<p class="information-title">
						{{ $t('ABOUT_US.INFORMATION.ADDRESS_TITLE') }}
					</p>
					<p class="information-content">
						{{ $t('ABOUT_US.INFORMATION.ADDRESS') }}
					</p>
				</div>

				<div class="phone-container item-container">
					<p class="information-title">
						{{ $t('ABOUT_US.INFORMATION.PHONE_TITLE') }}
					</p>
					<p class="information-content">
						{{ $t('ABOUT_US.INFORMATION.PHONE') }}
					</p>
				</div>

				<div class="atention-hour-container item-container">
					<p class="information-title">
						{{ $t('ABOUT_US.INFORMATION.OPENING_HOURS_TITLE') }}
					</p>
					<div class="information-content opening-hours">
						<template v-for="day in days" :key="day">
							<span class="day">
								{{ day }}
							</span>
						</template>
					</div>
					<div class="hours-content">
						<div class="hours">
							{{ $t('ABOUT_US.INFORMATION.HOURS') }}
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.about-us-main-container {
		.title-container {
			padding: 20px;
		}
		.img-container {
			padding: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.description-container {
			padding: 20px;
		}
		.map-main-container {
			margin: 20px;
			padding: 20px;
			background-color: var(--light-grey);
			.ubication-legend {
				border-bottom: 3px solid var(--primary);
			}
			.map-container {
				width: 100%;
				height: 80vh;
			}
			.information-container {
				margin-top: 20px;
				display: flex;
				justify-content: space-around;
				.information-title {
					font-weight: bold;
				}
				.information-content {
					display: flex;
					justify-content: space-around;
					.day {
						padding: 0 10px;
					}
				}
				.hours-content {
					display: flex;
					align-items: center;
					justify-content: space-around;
				}
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.about-us-main-container {
		.title-container {
			padding: 20px;
		}
		.img-container {
			padding: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
			img {
				width: 100%;
			}
		}
		.description-container {
			padding: 20px;
			p {
				font-size: 12px;
			}
		}
		.map-main-container {
			margin: 10px;
			padding: 10px;
			background-color: var(--light-grey);
			.ubication-legend {
				border-bottom: 3px solid var(--primary);
			}
			.map-container {
				width: 100%;
				height: 40vh;
			}
			.information-container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin-top: 20px;
				.item-container {
					display: flex;
					flex-direction: column;
					justify-content: center;
					p {
						text-align: center;
					}
				}
				.information-title {
					font-weight: bold;
				}
				.information-content {
					display: flex;
					justify-content: center;
					.day {
						padding: 0 10px;
					}
				}
				.hours-content {
					display: flex;
					align-items: center;
					justify-content: space-around;
				}
			}
		}
	}
}

</style>