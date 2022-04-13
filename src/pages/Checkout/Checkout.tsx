import { Link, useParams } from "react-router-dom";
import * as Yup from "yup";

import { Form } from "@/components";

const Checkout = () => {
  let { title } = useParams();

  const formData = [
    {
      name: "firstName",
      label: "First Name",
      validation: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    },
    {
      name: "lastName",
      label: "Last Name",
      validation: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    },
    {
      name: "email",
      label: "E Mail",
      validation: Yup.string().email("Invalid email").required("Required"),
    },
  ];

  return (
    <div style={{ padding: "16px", paddingTop: "60px" }}>
      <Link to={"/listings"}>
        <h1>{"<" + title}</h1>
      </Link>
      <Form
        data={formData}
        onSubmit={(e) => {
          alert(JSON.stringify(e, null, 2));
        }}
      />
    </div>
  );
};

export default Checkout;
