import {Helmet} from "react-helmet-async";
import ListItem from "../../components/Article.tsx";
import {Movie} from "../../dammy/Movie.tsx";
import {Card} from "../../components/Card.tsx";

export const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className={`lg:col-span-5 xl:col-span-6 flex flex-col w-1/2`}>
        <Card>
          {Movie.map((movie) => (
              <ListItem key={movie.id} movie={movie} />
          ))}
        </Card>
      </div>
    </>
  )
}