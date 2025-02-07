const page = ({ params }: { params: { id: string } }) => {
  return <div>User {params.id} details </div>;
};

export default page;
