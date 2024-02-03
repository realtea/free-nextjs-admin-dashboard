
import { useRef, useState } from 'react';
import { IconPlus } from '@tabler/icons-react';
import Link from "next/link";

const CreateStudy = () => {
  const [openModal, setOpenModal] = useState(false);
  const [passage, setPassage] = useState('');
  const passageInputRef = useRef<HTMLInputElement>(null);

  function onCloseModal() {
    setOpenModal(false);
    setPassage('');
  }

  return (
    <Link href="?modal=true"
      className="inline-flex justify-left gap-3 rounded-full mx-8 bg-primary py-4 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
    >
    <span><IconPlus/></span>
    New Study
    </Link>
  );
}

export default CreateStudy;

