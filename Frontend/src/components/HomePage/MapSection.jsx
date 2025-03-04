function MapSection() {
    return (
      <>
        <section className="flex justify-center px-2 lg:px-[72px] my-[80px]">
            <iframe
            className="w-full h-[450px] shadow-lg rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.229564907128!2d112.7875693592903!3d-7.312681080904615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa8cf321a5d3%3A0xa20235fc28e1ca1a!2sKebun%20Bibit%20Wonorejo!5e0!3m2!1sen!2sid!4v1730360845152!5m2!1sen!2sid"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
      </>
    );
  }
  
  export default MapSection;
  