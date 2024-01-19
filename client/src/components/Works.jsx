import Masonry from "react-responsive-masonry";
import { useData } from "./DataContext";
import Card from "./Card";
import HiddenCard from "./HiddenCard";

const Works = () => {
  const { workList } = useData();

  return (
    <Masonry columnsCount={3}>
      {workList.map((_work) =>
        !_work.hidden ? (
          <Card key={_work._id} work={_work} />
        ) : (
          <HiddenCard
            key={_work._id}
            workid={_work._id}
            hidden={!_work.hidden}
          />
        )
      )}
    </Masonry>
  );
};

export default Works;
