import { DialogComponent } from "@/components/dialog";
import { DoctorAppointmentTable } from "@/components/doctor/doctor-appointment";

const DoctorAppointment = () => {
  return (
    <div>
      <h1 className="py-4 text-xl font-bold px-6">Doctor Appointment</h1>
      <div className="flex justify-end p-6">
        <DialogComponent
          btnName={"Add record"}
          title={"Add Record"}
          children={<div>add</div>}
        />
      </div>
      <DoctorAppointmentTable />
    </div>
  );
};

export default DoctorAppointment;
