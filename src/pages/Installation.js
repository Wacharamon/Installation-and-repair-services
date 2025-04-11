import React from 'react';
import './Installation.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  { id: 1, name: 'ติดตั้งแอร์', image: '/images/air-conditioner.png' },
  { id: 2, name: 'ติดตั้งกล้องวงจรปิด', image: '/images/cctv.png' },
  { id: 3, name: 'ติดตั้งเครื่องทำน้ำอุ่น', image: '/images/water-heater.png' },
  { id: 4, name: 'ติดตั้งปั๊มน้ำ', image: '/images/water-pump.png' },
];

const Installation = () => {
  return (
    <div className="installation-wrapper">
    <Navbar /> 
    <h3>บริการติดตั้ง</h3>
      {/* Categories */}
      <section className="category-section">
    <div className="category-scroll">
        {[
            { title: "เครื่องใช้ไฟฟ้า", imgSrc: "/assets/electric-appliance.jpg" },
            { title: "ประปา", imgSrc: "/assets/category2.png" },
            { title: "ไฟฟ้า", imgSrc: "/assets/category3.png" },
            { title: "เครื่องมือวัด", imgSrc: "/assets/category4.png" },
            { title: "เฟอร์นิเจอร์", imgSrc: "/assets/category5.png" },
            { title: "งานช่างทั่วไป", imgSrc: "/assets/category6.png" }
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
                    ใส่ตะกร้า
                </button>
            </div>
        ))}
    </div>
</section>

      <Footer />
    </div>
  );
};

export default Installation;
