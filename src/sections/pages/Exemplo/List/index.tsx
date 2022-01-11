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
          {launches.map((launch, index) => (
            <div className="col-12" key={`launch-card-${launch.id}-${index}`}>
              <ExampleCard launch={launch} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default List;
