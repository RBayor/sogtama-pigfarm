import React, { FC } from "react";

interface Props {
  stat: number;
  title: string;
}
export const Info: FC<Props> = ({ stat, title }) => {
  return (
    <div className="flex flex-col text-center">
      <div className="font-bold text-4xl">{stat}</div>
      <div>{title}</div>
    </div>
  );
};
