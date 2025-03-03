import { useEffect, useState } from "react";

type Programing = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

const Programs = () => {
  const [programs, setPrograms] = useState<Programing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => {
        setPrograms(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du fetch des séries :", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <div>
      <h1>Liste des Séries</h1>
      <div>
        {programs.map((program) => (
          <div key={program.id}>
            <img src={program.poster} alt={program.title} />
            <h2>{program.title}</h2>
            <p>
              <strong>Pays :</strong> {program.country}
            </p>
            <p>
              <strong>Année :</strong> {program.year}
            </p>
            <p>{program.synopsis}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
