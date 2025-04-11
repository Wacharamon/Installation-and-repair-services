import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './HomePage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function HomePage() {
    const bannerImages = [
        "/assets/banner1.png",
        "/assets/banner2.png"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCartConfirmation, setShowCartConfirmation] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    
    // Ref สำหรับ popular scroll
    const popularScrollRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
        }, 3000);
        return () => clearInterval(interval); // cleanup
    }, [bannerImages.length]);

    const goToPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? bannerImages.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    };

    const handleAddToCart = (item) => {
        setSelectedItem(item);
        setShowCartConfirmation(true);
    };

    const confirmAddToCart = () => {
        alert(`สินค้าหมวด ${selectedItem.title} ได้รับการเพิ่มลงในตะกร้าแล้ว!`);
        setShowCartConfirmation(false);
    };


    
    return (
        <div className="homepage-container">
            <Navbar />

            {/* Promo Banner */}
            <div className="promo-banner">
                <div className="custom-slider">
                    <img
                        src={bannerImages[currentIndex]}
                        alt={`โปรโมชั่น ${currentIndex + 1}`}
                        className="promo-image"
                    />
                </div>
                <div className="slider-dots">
                    {bannerImages.map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(i)}
                        />
                    ))}
                </div>
            </div>

            {/* Main Menu */}
            <div className="main-menu">
                <Link to="/installation" className="menu-button">
                    <img src="/assets/ruler.png" alt="บริการติดตั้ง" className="menu-icon" />
                    บริการติดตั้ง
                </Link>
                <Link to="/repair" className="menu-button">
                    <img src="/assets/wrench.png" alt="บริการซ่อมแซม" className="menu-icon" />
                    บริการซ่อมแซม
                </Link>
            </div>
            
            <section className="popular-section">
    <h3>บริการยอดนิยม</h3>
    <div className="popular-scroll" ref={popularScrollRef}>
        {[
            { title: "ติดตั้งเครื่องใช้ไฟฟ้า", imgSrc: "/assets/air conditioner.jpg", price: "500 บาท" },
            { title: "ซ่อมระบบไฟฟ้า", imgSrc: "/assets/electrical-system.jpg", price: "600 บาท" },
            { title: "ซ่อมระบบประปา", imgSrc: "/assets/water-system.jpg", price: "550 บาท" },
            { title: "ติดตั้งปั้มนํ้า", imgSrc: "/assets/water pump.jpg", price: "700 บาท" },
        ].map((item, i) => (
            <div key={i} className="popular-item">
                <div className="img-box">
                    <img src={item.imgSrc} alt={item.title} />
                </div>
                <p>{item.title}</p>
                <p className="service-price">{item.price}</p> {/* แสดงราคาแทนปุ่ม */}
            </div>
        ))}
    </div>
</section>

            <section className="category-section">
                <h3>หมวดสินค้า</h3>
                <div className="category-scroll">
                    {[
                        { title: "ติดตั้งเครื่องปรับอากาศ", imgSrc: "/assets/air conditioner.jpg" },
                        { title: "ติดตั้งปั้มนํ้า", imgSrc: "/assets/water pump.jpg" },
                        { title: "ซ่อมระบบไฟฟ้า", imgSrc: "/assets/electrical-system.jpg" },
                        { title: "ซ่อมระบบประปา", imgSrc: "/assets/water-system.jpg" }
                       
                        
                    ].map((item, i) => (
                        <div key={i} className="category-item">
                            <div className="img-box">
                                <img src={item.imgSrc} alt={item.title} />
                            </div>
                            <p>{item.title}</p>
                            <button className="category-button">ดูรายละเอียด</button>
                            <button
                                className="add-to-cart-button"
                                onClick={() => handleAddToCart(item)}>
                                <span>
                                    <FontAwesomeIcon icon={faShoppingCart} size="lg" /> ใส่รถเข็น
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Cart Confirmation */}
            {showCartConfirmation && (
                <div className="cart-confirmation">
                    <div className="confirmation-box">
                        <p>
                            คุณต้องการเพิ่มบริการหรือรถเข็น<br />
                            "<strong>{selectedItem.title}</strong>" ลงในตะกร้าหรือไม่?
                        </p>
                        <div className="button-group">
                            <button className="btn yes" onClick={confirmAddToCart}>ใช่</button>
                            <button className="btn no" onClick={() => setShowCartConfirmation(false)}>ไม่</button>
                        </div>
                    </div>
                </div>
            )}

            {/* FAQ Section */}
<section className="faq-section">
  <h3>คำถามที่พบบ่อย</h3>
  <div className="faq-box">รวมคำถามและคำตอบที่พบบ่อย</div>
</section>

            <section className="service-steps-section">
    <h3>ขั้นตอนการใช้บริการ</h3>
    <div className="steps-container">
        <div className="step-item">
            <span className="step-number">1</span>
            <p>เลือกบริการที่ต้องการ</p>
        </div>
        <div className="step-item">
            <span className="step-number">2</span>
            <p>จองการติดตั้งหรือซ่อมแซมและเพิ่มลงในตะกร้า</p>
        </div>
        <div className="step-item">
            <span className="step-number">3</span>
            <p>รอการยืนยันจากทีมงาน</p>
        </div>
        <div className="step-item">
            <span className="step-number">4</span>
            <p>ช่างเข้าหน้างานตามเวลานัด</p>
        </div>
        <div className="step-item">
            <span className="step-number">5</span>
            <p>ตรวจสอบและชำระเงิน</p>
        </div>
    </div>
</section>
            {/* Map Section */}
            <section className="map-section">
                <h3>ตำแหน่ง</h3>
                <img src="/assets/map.png" alt="แผนที่" className="map-img" />
            </section>

            <Footer />
        </div>
    );
}

export default HomePage;
