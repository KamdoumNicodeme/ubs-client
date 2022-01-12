import {useState} from "react";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import {sliderItems} from "../Data";

function Slider (props)  {

    const [slideIndex, setSlideIndex] = useState(0);




    const handleClick = (direction) => {

        if (direction==="left"){
            setSlideIndex(slideIndex >0 ? slideIndex -1: 2);
            console.log("gauche");
        }else{
            setSlideIndex(slideIndex <2 ? slideIndex +1: 0);

            console.log("droite");

        }

    };

    return (

        // container
        <div className="flex bg-white w-full h-full relative px-8 overflow-hidden ">

            {/*ArrowLeft*/}
            <div
                className="flex items-center absolute top-0 bottom-0 justify-items-center	 cursor-pointer opacity-50 m-auto"
                /* eslint-disable-next-line no-sequences */
                direction="left" style={{left: `${props => props.direction === "left", "10px"}`, zIndex: `${2}`}}
                onClick={()=>handleClick("left")}>
                <AiOutlineLeft className="bg-red-100 rounded-full text-3xl inset-y-1/2  cursor-pointer"/>
            </div>
            {/*end ArrowLeft*/}

            {/*wrapper*/}
            <div className="h-full flex duration-1000 ease-in-out" style={{transform: `translateX(${-(slideIndex * 100)}vw)`}}  >
                {sliderItems.map((item) =>(

                    <div className="flex items-center w-screen h-screen" style={{backgroundColor:`#${item.bg}`}} key={item.id} >
                        {/*container image    */}
                        <div className="flex-1 h-4/5">
                            <img src={item.img} alt=""/>
                        </div>
                        {/*    info container*/}
                        <div className="flex-1 p-52">
                            {/*    title*/}

                            <h1 className="text-8xl">

                                {item.title}
                            </h1>

                            {/*    description*/}

                            <p className="m-10 mx-auto text-xl font-medium tracking-wider">
                                {item.desc}
                            </p>

                            {/*    button*/}
                            <button
                                className="p-4 text-base bg-transparent pointer bg-gray-100 border-4 border-black border-opacity-100">SHOW
                                NOW
                            </button>

                        </div>


                    </div>

                ))}
                {/*    slide*/}


            </div>

            {/*ArrowRight*/}
            <div
                className="flex items-center absolute top-0 bottom-0 justify-items-center cursor-pointer opacity-50 m-auto"

                /* eslint-disable-next-line no-sequences */
                direction="right" style={{right: `${props => props.direction === "right" , "10px"}`}}
                onClick={()=>handleClick("right")}>
                <AiOutlineRight className="bg-red-100 rounded-full text-3xl inset-y-1/2  cursor-pointer"
                                direction="right"/>
            </div>
            {/*end ArrowRight*/}


            {/*end container*/}
        </div>


    );

}

export default Slider;