import { Tabs } from "@mantine/core";

interface Event {
  date: string;
  description: string;
}

interface EventsProps {
  curitiba: Event[];
}

function SchedulePanel({
  value,
  schedule,
}: {
  value: string;
  schedule: Event[];
}) {
  return (
    <Tabs.Panel value={value} pt="xs">
      <div className="table-responsive">
        <table className="table table-striped">
          <tbody>
            {schedule.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.date}</th>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Tabs.Panel>
  );
}

export default function Schedule({ curitiba }: EventsProps) {
  return (
    <section className="section static-light footer" id="calendario">
      <div className="container">
        <h2 className="h2">Calendário 2025</h2>
        <Tabs color="red.8" radius="xs" defaultValue="curitiba">
          <Tabs.List>
            <Tabs.Tab value="curitiba">Curitiba</Tabs.Tab>
          </Tabs.List>

          <SchedulePanel value="curitiba" schedule={curitiba} />
        </Tabs>
      </div>
    </section>
  );
}
