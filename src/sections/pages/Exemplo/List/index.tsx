import React from "react";
import ExampleCard from "../../../../components/ExampleCard";
import { LaunchQuery } from "../../../../types/pages/com-graphql";

type SectionProps = {
  launches: LaunchQuery[];
};
const List = ({ launches }: SectionProps) => {
  return (
    <section>
      <div className="container">
        <div className="row py-4">
          {launches.map((launch) => (
            <div className="col-12" key={launch.id}>
              <ExampleCard launch={launch} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default List;
