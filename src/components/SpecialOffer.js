import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import sofaImg from "../img/sofa.jpg";

const SpecialOffer = () => {
  return (
    <div id="customContainer" className="pb-3">
      <h1 id="offersHeading" className="py-5">
        Special Offer
      </h1>
      <Row>
        <Col md={6} >
          <img src={sofaImg} alt="sofa" id="sofaImg" className="img-fluid" />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div>
          <h2 style={{ color: "#0d1137" }}>Flexible Sofa</h2>
          <h3 style={{ color: "#0d1137" }}>
            Price:<del style={{ color: "#d72631" }}> $800</del>
          </h3>
          <h2 style={{ color: "#0d1137" }}>
            Offer Price: <span style={{ color: "#77c593" }}>$600</span>
          </h2>
          <p className='pt-3 lead text-justify'>
            Made from Kiln-dried imported Beech wood and veneered engineered
            wood and veneered MDF. High quality environment friendly Italian
            Ultra Violet (UV) and Polyurethane (PU) Lacquer in antique finish
            Please refer to images for dimension details Imported fabric
            upholstery with soft and durable cushioning. Fabric can be selected
            from available options Fabric can dry-cleaned Any assembly or
            installation required will be done by the HATIL team at the time of
            delivery (one day after delivery for CKD items) Imported high
            quality hardware fittings Indoor use only Weight Single seater 34.00
            kgs, Double seater 37.00 kgs Most of our furniture is made of
            natural components, which will have natural differences in grain
            construction and occasional minor blemish.
          </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SpecialOffer;
