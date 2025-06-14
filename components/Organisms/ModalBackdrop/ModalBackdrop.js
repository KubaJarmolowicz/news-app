"use client";
import { useRouter } from "next/navigation";

export const ModalBackdrop = () => {
  const { back } = useRouter();
  return <div className="modal-backdrop" onClick={back} />;
};
