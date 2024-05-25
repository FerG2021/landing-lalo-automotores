<template>
	<a
		href="https://wa.me/NUMERODETELEFONO?text=Hola"
		target="_blank"
		class="whatsapp-float"
		title="¿Necesitas ayuda? Contactanos"
	>
		<i class="pi pi-whatsapp my-float"></i>
	</a>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.whatsapp-float{
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: transform 0.5s ease;
}

.whatsapp-float:hover {
  background-color: #128C7E;
  color: #fff;
  transform: scale(1.1);
}

.my-float {
	font-size: 30px;
}

.whatsapp-float:hover::before {
	content: attr(title);
	position: absolute;
	display: block;
	width: max-content;
	padding: 8px 12px; /* Ajustado el espaciado */
	background-color: var(--white);
	color: var(--dark);
	border-radius: 4px;
	top: 50%; /* Añadido */
	right: calc(100% + 10px); /* Añadido */
	transform: translateY(-50%); /* Añadido */
	white-space: nowrap;
	font-size: 14px;
}
</style>