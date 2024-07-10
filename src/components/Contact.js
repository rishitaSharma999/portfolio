import { useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';


import { apiConnector } from "../services/apiconnector";
import { contactusEndpoint } from "../services/apis";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("Form Data - ", data);
    try {
      setLoading(true);
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );
      console.log("Email Res - ", res);
      //toast.success("Email sent successfully")
      alert("Email sent successfully");
      setLoading(false);
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
      //toast.success("Error in sending email");
      alert("Error in sending email");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit(submitContactForm)}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Enter first name"
                    className="w-full rounded-[0.5rem] bg-blue-700 p-[12px]  text-emerald-200"
                    {...register("firstname", { required: true })}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Enter last name"
                    className="w-full rounded-[0.5rem] bg-blue-700 p-[12px]  text-emerald-200"
                    {...register("lastname")}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    className="w-full rounded-[0.5rem] bg-blue-700 p-[12px]  text-emerald-200"
                    {...register("email", { required: true })}
                  ></input>
                </Col>
                <Col sm={6} className="px-1">
                  {/* telephone */}{" "}
                  <input
                    type="tel"
                    name="phonenumber"
                    id="phonenumber"
                    placeholder="12345 67890"
                    className="w-full rounded-[0.5rem] bg-blue-700 p-[12px]  text-emerald-200"
                    {...register("phoneNo", {
                      required: {
                        value: true,
                        message: "Please enter your Phone Number.",
                      },
                      maxLength: { value: 12, message: "Invalid Phone Number" },
                      minLength: { value: 10, message: "Invalid Phone Number" },
                    })}
                  ></input>
                </Col>
                <Col>
                  <textarea
                    as="textarea"
                    aria-label="With textarea"
                    name="message"
                    id="message"
                    cols="30"
                    rows="3"
                    placeholder="Enter your message here"
                    className=" input-group-text-area"
                    style={{ width: "100%" }}
                    {...register("message", { required: true })}
                  ></textarea>
                  <button type="submit">
                    
                    <span>Submit</span>{" "}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
