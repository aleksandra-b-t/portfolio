import './contact.css';

const Contact = () => {
    return ( 
    <div className="c">
        <div className="c-bg">
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">title</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" alt="" className="icon" />
                            123 456 7890
                        </div>
                        <div className="c-info-item">
                            <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" alt="" className="icon" />
                            123 456 7890
                        </div>
                        <div className="c-info-item">
                            <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" alt="" className="icon" />
                            123 456 7890
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                            freelancing if the right project comes along. me.
                    </p>
                    <form >
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {/* {done && "Thank you..."} */}
                    </form>
                </div>
            </div>
        </div>
    </div> 
    );
}
 
export default Contact;