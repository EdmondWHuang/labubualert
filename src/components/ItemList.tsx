import React, { useState } from "react";
import { v4 } from "uuid";
import CountdownTimer from "./CountdownTimer";

const handleGroupItemsByDate = (items: ItemListProps["items"]) => {
  return items.reduce((groupsByDate, currentItem) => {
    const date = new Date(currentItem.releaseTime).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    if (!groupsByDate[date]) {
      groupsByDate[date] = [];
    }

    groupsByDate[date].push(currentItem);

    return groupsByDate;
  }, {} as Record<string, ItemListProps["items"]>);
};

interface ItemListProps {
  items: {
    id: string;
    title: string;
    price: number;
    releaseTime: string;
    description?: string;
    imageUrl?: string | null | undefined;
  }[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  const [groupedItems] = useState(handleGroupItemsByDate(items));

  return (
    <div>
      <ul className="flex flex-col gap-8">
        {Object.entries(groupedItems).map(([date, items]) => (
          <li
            key={`groupItemsByDateContainer-${v4()}`}
            className="flex flex-col gap-4"
          >
            <h2 className="font-bold">{date}</h2>
            <ul className="flex flex-col gap-6">
              {items.map((item) => {
                const isPastRelease = new Date(item.releaseTime) < new Date();

                return (
                  <li
                    key={`itemContainer-${v4()}`}
                    className="flex flex-col md:flex-row items-center justify-around gap-4 md:gap-6 bg-cloud-white py-4 px-2 md:py-6 md:px-4 rounded-lg shadow-md"
                  >
                    <img
                      src={item?.imageUrl || undefined}
                      alt={item.title}
                      className="w-32 h-32 md:w-28 md:h-28 object-cover rounded-md"
                    />
                    <div className="flex flex-col gap-2 md:gap-4">
                      <h4 className="font-bold text-center">{item.title}</h4>
                      {item.description && (
                        <p className="text-center">{item.description}</p>
                      )}
                      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                        <div className="flex flex-col items-center justify-center">
                          <h6 className="text-graphite-grey">PRICE</h6>
                          <p className="bg-butter-yellow-light py-2 px-4 rounded-full text-center">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <h6 className="text-graphite-grey">
                            {isPastRelease ? "RELEASED TIME" : "NEXT DROP IN"}
                          </h6>
                          <p
                            className={`${
                              isPastRelease
                                ? "bg-rose-quartz"
                                : "bg-mint-cream-light"
                            } py-2 px-4 rounded-full text-center`}
                          >
                            {/* {item.releaseTime} */}
                            <CountdownTimer target={item.releaseTime} />
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
