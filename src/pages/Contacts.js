const Contacts = () => {
    return ( 
        <main className="section">
            <div className="container">
                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Belgrade, Serbia</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p><a href="tel:+381631824800">+381 (63) 182-48-00</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:ek371116@gmail.com">ek371116@gmail.com</a></p>
                        </li>
                    </ul>

            </div>
        </main>
     );
}
 
export default Contacts;