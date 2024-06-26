"use client";

import {
  IconArrowLeft,
  IconArrowUpRight,
  IconExternalLink,
  IconStar,
  IconStarFilled,
} from "@tabler/icons-react";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { technologies } from "@/data/technologies";
import { Badge } from "@/components/ui/badge";
import { works } from "@/data/works";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function WorkPage() {
  const t = useTranslations("work.table");

  const tableHeadItems = [
    {
      title: t("headers.year"),
    },
    {
      title: t("headers.project"),
    },
    {
      title: t("headers.technologies"),
      width: 500,
      classname: "hidden lg:table-cell",
    },
    {
      title: "Link",
      classname: "hidden sm:table-cell",
    },
    {
      title: "",
    },
  ];
  return (
    <main className="min-h-[calc(100vh-80px)] w-full pt-24 pb-4 px-12">
      <section className="m-auto h-full max-w-screen-xl flex-1 w-full flex items-start justify-start flex-col text-white gap-12">
        <div className="flex-col items-start justify-center gap-2 flex">
          <Link href={"/"} className="flex items-center justify-center gap-1">
            <IconArrowLeft size={24} color="#eab308" />
            <p className="text-xl text-yellow-500 font-semibold">Dufyz</p>
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold">{t("title")}</h1>
        </div>
        <Table>
          <TableHeader>
            <TableRow
              className="hover:bg-transparent border-b"
              style={{
                borderColor: "rgba(203,213,225,.1)",
              }}
            >
              {tableHeadItems.map((item, index) => (
                <TableHead
                  className={cn("text-yellow-500", item.classname)}
                  key={index}
                  style={{
                    width: item?.width,
                  }}
                >
                  {item.title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {works.map((item, index) => (
              <TableRow
                key={index}
                className="hover:bg-transparent border-b font-semibold"
                style={{
                  borderColor: "rgba(203,213,225,.1)",
                }}
              >
                <TableCell className="text-muted-foreground">
                  {item.year}
                </TableCell>
                <TableCell>
                  <Link href={item.link} target="_blank">
                    {item.project}
                  </Link>
                </TableCell>
                <TableCell className="gap-2 flex-wrap hidden lg:flex">
                  {item.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      className="bg-[#122c3d] text-[#56d7d3] border"
                    >
                      {technologies[tech].label}
                    </Badge>
                  ))}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {item.link && (
                    <Link
                      href={item.link}
                      className="flex items-center justify-start gap-2"
                      target="_blank"
                    >
                      {item.link.split("https://")[1]}
                      <IconArrowUpRight size={14} />
                    </Link>
                  )}
                </TableCell>
                <TableCell className="table-cell">
                  {item.isFavourite ? (
                    <IconStarFilled size={12} color="#eab308" />
                  ) : (
                    <IconStar size={12} />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}
