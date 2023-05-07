import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <>
      <ul>{genres && genres.map((e) => <li key={e.id}>{e.name}</li>)}</ul>
    </>
  );
};
export default GenreList;
