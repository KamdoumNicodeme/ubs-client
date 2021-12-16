import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaMapMarker,
    FaPhoneAlt,
    FaPinterest,
    FaTwitter
} from "react-icons/all";



function Footer() {

    return (
        <div className="flex my-0 px-4">
            {/*    left */}

            <div className="flex  flex-1 flex-col p-5" >

                {/*  Logo*/}
                <h1 className="text-2xl mr-4 font-bold">Ubs Shop</h1>


                {/*        decripption*/}

                <p className="m-1" >
                    Post hoc impie perpetratum quod in aliis quoque iam timebatur, tamquam licentia crudelitati indulta
                    per suspicionum nebulas aestimati quidam noxii damnabantur. quorum pars necati, alii puniti bonorum
                    multatione actique laribus suis extorres nullo sibi relicto praeter querelas et lacrimas, stipe
                    conlaticia victitabant, et civili iustoque imperio ad voluntatem converso cruentam, claudebantur
                    opulentae domus et clarae.
                </p>

                {/*        Social container*/}
                <div className="flex">
                    {/*        social icon*/}
                    <div className="h-30 w-30   mr-5 items-center justify-center " style={{color:`${'blue'}`}}>
                        <FaFacebook className="bg-white h-10 w-10 rounded-full tex-white"/>
                    </div>
                    <div className="h-30 w-30 rounded-full tex-white mr-5  items-center justify-center " style={{color:`${'red'}`}} >
                        <FaInstagram className="bg-white h-10 w-10 rounded-full tex-white"/>
                    </div>
                    <div className="h-30 w-30 rounded-full tex-white mr-5 items-center justify-center" style={{color:`${'white'}`}}>
                        <FaTwitter className="bg-blue-500 h-10 w-10 rounded-full tex-white" />
                    </div>
                    <div className="h-30 w-30 rounded-full tex-white mr-5 items-center justify-center" style={{color:`${'red'}`}}>
                        <FaPinterest className="bg-white h-10 w-10 rounded-full"/>
                    </div>

                </div>

            </div>
            {/*    center*/}
            <div className="flex-1 p-5">
                <h3 className="mb-3 font-bold">UseFul Links</h3>
                <ul className="m-0 p-0 flex flex-wrap" >
                    <li className="w-1/2">Home</li>
                    <li className="w-1/2">Cart</li>
                    <li className="w-1/2">Man Fashion</li>
                    <li className="w-1/2">Woman Fashion</li>
                    <li className="w-1/2">Accessories</li>
                    <li className="w-1/2">My Account</li>
                    <li className="w-1/2">Order Tracking</li>
                    <li className="w-1/2">Wishlist</li>
                    <li className="w-1/2">Terms</li>
                </ul>

            </div>
            {/*    right*/}
            <div className="flex-1 p-5">
                <h3 className="font-bold"> Contact</h3>
                <div className=" mb-5 flex  items-center">
                    <FaMapMarker className="mr-2"/>Yaounde, marche Mokolo boutique immatricule 435
                </div>
                <div className=" mb-5 flex items-center">
                <FaPhoneAlt className="mr-2"/>+237 69984746
                </div>
                <div className=" mb-5 flex items-center">
                    <FaEnvelope className="mr-2"/> contactubs@gmail.com
                </div>
                <div className="w-1/2">
                    <img src="https://i.ibb.co/bgtZ6Qv/logo-cb.jpg" alt=""/>
                </div>

            </div>

        </div>
    );

}

export default Footer;