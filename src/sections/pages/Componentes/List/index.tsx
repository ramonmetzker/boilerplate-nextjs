import React from "react";
import Button from "../../../../components/Button";
import Heading from "../../../../components/Heading";
import Tag from "../../../../components/Tag";
import { Italic } from "../../Home/Main/styles";

const List = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Heading color="secondary" className="my-3 ps-4">
            <Italic>Botões</Italic>
          </Heading>
        </div>
        <div className="col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center">
          <Button variant="primary">Primário</Button>
        </div>
        <div className="col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center">
          <Button variant="secondary">Secundário</Button>
        </div>
        <div className="col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center">
          <Button variant="primary" disabled>
            Inativo
          </Button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <Heading color="secondary" className="my-3 ps-4">
            <Italic>Tags</Italic>
          </Heading>
        </div>
        <div className="col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center">
          <Tag tag="Assunto" />
        </div>
      </div>
    </div>
  );
};

export default List;
