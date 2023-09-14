// //Icons
import { IconArrowRight } from '@tabler/icons-react';

// //Styles
import '../scss/Slider.scss';

// //Images
import AppleLogo from '../assets/images/appleLogo.png'
import { useEffect, useState } from 'react';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id : 1 ,
            title : 'iPhone 14 Series',
            desc : 'Up to 10% off Voucher',
            image : 'https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1695600000&Signature=F1zfioUkdifQ8-2WzdQ7hOSUqKGdXnVzdGT7VN-N4CTDEgWnT5l2Ot3PfzK34QC-kT4eETVmC6ZupMcHvq7qngquRL~qQRDWRkPYuNNBd1HBDQc2BDHwMbswvwJGsDxvHUmFGGJaHCFvJz6C2tqny7~FdP1CjitXPZPCdJx6NQjKRg3vaKMgRLjIwGRzMVpKf~PxGNExvp9QEO1-HufcpgMDbqN5o07FUmcfmlKidwmllvjLdHBvR6-Mz4nwh8I1mU1BfxvhvxVKdPKxZ7MUw608RKk4wfaC4zVKEidplBZqxZqbx9k7XvdR2Ys08Q2sbf5EZxarmaPdKIESQ8k8Ug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id : 2 ,
            title : 'iPhone 14 Series bbbbbb',
            desc : 'Up to 10% off Voucher',
            image : 'https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1695600000&Signature=F1zfioUkdifQ8-2WzdQ7hOSUqKGdXnVzdGT7VN-N4CTDEgWnT5l2Ot3PfzK34QC-kT4eETVmC6ZupMcHvq7qngquRL~qQRDWRkPYuNNBd1HBDQc2BDHwMbswvwJGsDxvHUmFGGJaHCFvJz6C2tqny7~FdP1CjitXPZPCdJx6NQjKRg3vaKMgRLjIwGRzMVpKf~PxGNExvp9QEO1-HufcpgMDbqN5o07FUmcfmlKidwmllvjLdHBvR6-Mz4nwh8I1mU1BfxvhvxVKdPKxZ7MUw608RKk4wfaC4zVKEidplBZqxZqbx9k7XvdR2Ys08Q2sbf5EZxarmaPdKIESQ8k8Ug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
        {
            id : 3 ,
            title : 'iPhone 14 Series aaaaa',
            desc : 'Up to 10% off Voucher',
            image : 'https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1695600000&Signature=F1zfioUkdifQ8-2WzdQ7hOSUqKGdXnVzdGT7VN-N4CTDEgWnT5l2Ot3PfzK34QC-kT4eETVmC6ZupMcHvq7qngquRL~qQRDWRkPYuNNBd1HBDQc2BDHwMbswvwJGsDxvHUmFGGJaHCFvJz6C2tqny7~FdP1CjitXPZPCdJx6NQjKRg3vaKMgRLjIwGRzMVpKf~PxGNExvp9QEO1-HufcpgMDbqN5o07FUmcfmlKidwmllvjLdHBvR6-Mz4nwh8I1mU1BfxvhvxVKdPKxZ7MUw608RKk4wfaC4zVKEidplBZqxZqbx9k7XvdR2Ys08Q2sbf5EZxarmaPdKIESQ8k8Ug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        },
    ]

    useEffect(() => {
        const nextSlide = () => {
            setCurrentSlide((prevSlide) => {
                if (prevSlide === slides.length - 1) {
                    return 0;
                } else {
                    return prevSlide + 1;
                }
            });
        };
    
        const intervalId = setInterval(nextSlide, 5000);
    
        return () => {
            clearInterval(intervalId);
        };
    }, [slides.length , currentSlide]);

    // const sliderNavHandler = (index) => {
    //     setCurrentSlide(index)
    // };
    
    return (
        <div className="slider">
            {slides.map((slide , index) => (
                <div className={`slide ${index === currentSlide ? 'active' : ''}`} key={slide.id}>
                    <div className="slideContent" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        <div className="left">
                            <div className="title">
                                <img src={AppleLogo} alt="" />
                                <span>{slide.title}</span>
                            </div>
                            <span className="desc">{slide.desc}</span>
                            <span className="shopBtn">
                                <span>Shop Now</span>
                                <IconArrowRight/>
                            </span>
                        </div>
                        <div className="right">
                            <img src={slide.image} alt="" />
                        </div>
                    </div>
                </div>
            ))}
            <div className="sliderDots">
                {slides.map((_ , index) => (
                    <div
                        key={index}
                        className={`sliderDot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></div>
                ))}
            </div>                
        </div>
    );
};

export default Slider;