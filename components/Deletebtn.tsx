import { deleteUser } from "@/app/actions/UserActions";

interface DeleteBtnProps {
  id: number;
}

const DeleteBtn = ({ id }: DeleteBtnProps) => {
  return (
    <form action={deleteUser}>
      <input type="hidden" name="id" value={id} />

      <button
        type="submit"
        className="text-red-600 hover:text-red-800 ml-2"
      >
        Delete
      </button>
    </form>
  );
};

export default DeleteBtn;