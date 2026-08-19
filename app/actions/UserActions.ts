"use server";

import User from "@/lib/user";
import { revalidatePath } from "next/cache";

export async function addUser(formData: FormData) {
  const id = Number(formData.get("id"));
  const name = String(formData.get("name"));
  const email = String(formData.get("email"));
  if (!id || !name || !email) {
    throw new Error("Missing required fields");
  }
  User.addUser({ id, name, email });
  revalidatePath("/");
}

export async function deleteUser(formData: FormData) {
  const id = Number(formData.get("id"));
    if (!id) {
    throw new Error("Missing required fields");
  }
    User.removeUserById(id);
    revalidatePath("/");
}
