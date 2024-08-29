import NoticeViewCard from "./components/notice-view-card";
import Image from "next/image";
import Title from "./components/title";
import { getNotices } from "@/notice/get-notices-view";
import Link from "next/link";

export default function Home() {

  const notices = getNotices();
  const listNotices = notices.map((notice) => {
    return (
      <NoticeViewCard
        key={notice.slug}
        title={notice.title}
        description={notice.notice_description}
        image={notice.cover}
        slug={notice.slug}
      />
    );
  });

  return (
    <>
      <div className="my-3 text-center">
        <Title>Coordenação de Informática - IFAL</Title>
      </div>
      <p className="mx-auto py-4 text-center">
        Nostrud ipsum cupidatat dolor in sit dolor. Dolor aute nulla Lorem occaecat nisi eu eu duis. Irure exercitation voluptate minim aliqua occaecat ea officia. Reprehenderit incididunt duis laboris fugiat tempor reprehenderit laborum aliquip velit dolore quis ex enim. Amet ut elit occaecat adipisicing nulla aliquip ut non.
        Fugiat commodo et et dolor laboris. Lorem nulla ex consequat proident nostrud sint qui. Et sit anim pariatur ut veniam non adipisicing culpa ut voluptate. Dolor duis ut elit officia dolor Lorem ipsum aliqua est aute duis voluptate nulla.
        Pariatur deserunt et qui eiusmod nisi cupidatat. Quis in aliqua eu id pariatur non id ex est sit. Culpa aliqua excepteur consectetur ad. Eiusmod dolor aliqua minim veniam aliquip deserunt excepteur consectetur id aute id.
        Minim sit voluptate amet est tempor eu.
      </p>
      <div className="py-6 flex justify-center items-center gap-12">
        <img src="/images/logo02.png" width={250} height={250} alt="logo da CINFO" className="w-48" />
        <Link href="https://www2.ifal.edu.br/">
          <img src="/images/logo-ifal.png" width={250} height={250} alt="logo do IFAL" className="w-64" />
        </Link>
      </div>
      <div className="w-full p-6 bg-slate-900 border border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        { listNotices }
      </div>
    </>
  );
}
