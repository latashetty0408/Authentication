import { useApp } from "../Context/Context";
import SortableItem from "../components/DragAndDrop/DragAndDrop";
import Layout from "../components/Layout/Layout";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

export default function Dashboard() {
  const { rowFirst, setRowFirst, rowSecond, setRowSecond, rowThird, setRowThird } = useApp();

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    if (rowFirst.some((item) => item.id === active.id)) {
      const oldIndex = rowFirst.findIndex((item) => item.id === active.id);
      const newIndex = rowFirst.findIndex((item) => item.id === over.id);
      setRowFirst(arrayMove(rowFirst, oldIndex, newIndex));
    } else if (rowSecond.some((item) => item.id === active.id)) {
      const oldIndex = rowSecond.findIndex((item) => item.id === active.id);
      const newIndex = rowSecond.findIndex((item) => item.id === over.id);
      setRowSecond(arrayMove(rowSecond, oldIndex, newIndex));
    } else if (rowThird.some((item) => item.id === active.id)) {
      const oldIndex = rowThird.findIndex((item) => item.id === active.id);
      const newIndex = rowThird.findIndex((item) => item.id === over.id);
      setRowThird(arrayMove(rowThird, oldIndex, newIndex));
    }
  };

  return (
    <Layout>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={rowFirst.map((item) => item.id)} strategy={verticalListSortingStrategy}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {rowFirst.map((item) => (
              <SortableItem key={item.id} id={item.id}>
                {item.component}
              </SortableItem>
            ))}
          </div>
        </SortableContext>

        <SortableContext items={rowSecond.map((item) => item.id)} strategy={verticalListSortingStrategy}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 mb-6">
            {rowSecond.map((item) => (
              <SortableItem key={item.id} id={item.id}>
                {item.component}
              </SortableItem>
            ))}
          </div>
        </SortableContext>

        <SortableContext items={rowThird.map((item) => item.id)} strategy={verticalListSortingStrategy}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 mb-6">
            {rowThird.map((item) => (
              <SortableItem key={item.id} id={item.id}>
                {item.component}
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </Layout>
  );
}
