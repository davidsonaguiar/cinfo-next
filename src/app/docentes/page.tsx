import { getTeachers } from "@/teachers/get-teachers-view";
import Title from "../components/title";
import TeachereViewCard from "../components/teacher-view-card";

export default async function TeachersPage() {

  const teachers = getTeachers();
  const listTeachers = teachers.map((teacher) => {
    return (
      <TeachereViewCard
        key={teacher.name}
        name={teacher.name}
        email={teacher.email}
        workArea={teacher.workArea}
        personalSite={teacher.personalSite}
        latter={teacher.latter}
        avatar={teacher.avatar}
      />
    );
  });

  return (
    <>
      <div className="my-5">
        <Title>Docentes</Title>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-2">
        { listTeachers }
      </div>
    </>
  )
}