import NavList from "./NavList";

const ContactForm = () => {
	return (
		<section>
			<NavList />
			<h3>Contacto</h3>
			<form action="">
				<div>
					<label>Nombre</label>
					<input type="text" name="name"/>
					<label>Email</label>
					<input type="email" name="email"/>
				</div>
				<div>
					<label>Mensaje</label>
					<textarea name="message" id="message" cols={40} rows={20}></textarea>
				</div>
				<button type="submit">Contactame</button>
			</form>
		</section>
	);
}

export default ContactForm;