import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Button from "@/components/ui/button/Button";
import JSLifeButton from "@/components/ui/button/JSLifeButton";
import { BoxIcon } from "@/icons";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Buttons | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Buttons page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function Buttons() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Buttons" />
      <div className="space-y-5 sm:space-y-6">
        {/* JSLife Button SM */}
        <ComponentCard title="JSLife Button SM">
          <div className="flex flex-wrap items-center gap-5">
            <JSLifeButton size="sm" variant="primary">
              JSLifeButton Primary
            </JSLifeButton>
            <JSLifeButton size="sm" variant="outline">
              JSLifeButton Outline
            </JSLifeButton>
            <JSLifeButton size="sm" variant="blue">
              JSLifeButton Blue
            </JSLifeButton>
            <JSLifeButton size="sm" variant="green">
              JSLifeButton Green
            </JSLifeButton>
            <JSLifeButton size="sm" variant="cyan">
              JSLifeButton Cyan
            </JSLifeButton>
            <JSLifeButton size="sm" variant="teal">
              JSLifeButton Teal
            </JSLifeButton>
            <JSLifeButton size="sm" variant="lime">
              JSLifeButton Lime
            </JSLifeButton>
            <JSLifeButton size="sm" variant="red">
              JSLifeButton Red
            </JSLifeButton>
            <JSLifeButton size="sm" variant="pink">
              JSLifeButton Pink
            </JSLifeButton>
            <JSLifeButton size="sm" variant="purple">
              JSLifeButton Purple
            </JSLifeButton>
          </div>
        </ComponentCard>

        {/* JSLife Button MD */}
        <ComponentCard title="JSLife Button MD">
          <div className="flex flex-wrap items-center gap-5">
            <JSLifeButton size="md" variant="primary">
              JSLifeButton Primary
            </JSLifeButton>
            <JSLifeButton size="md" variant="outline">
              JSLifeButton Outline
            </JSLifeButton>
            <JSLifeButton size="md" variant="blue">
              JSLifeButton Blue
            </JSLifeButton>
            <JSLifeButton size="md" variant="green">
              JSLifeButton Green
            </JSLifeButton>
            <JSLifeButton size="md" variant="cyan">
              JSLifeButton Cyan
            </JSLifeButton>
            <JSLifeButton size="md" variant="teal">
              JSLifeButton Teal
            </JSLifeButton>
            <JSLifeButton size="md" variant="lime">
              JSLifeButton Lime
            </JSLifeButton>
            <JSLifeButton size="md" variant="red">
              JSLifeButton Red
            </JSLifeButton>
            <JSLifeButton size="md" variant="pink">
              JSLifeButton Pink
            </JSLifeButton>
            <JSLifeButton size="md" variant="purple">
              JSLifeButton Purple
            </JSLifeButton>
          </div>
        </ComponentCard>

        {/* Primary Button */}
        <ComponentCard title="Primary Button">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary">
              Button Text
            </Button>
            <Button size="md" variant="primary">
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Primary Button with Start Icon */}
        <ComponentCard title="Primary Button with Left Icon">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary" startIcon={<BoxIcon />}>
              Button Text
            </Button>
            <Button size="md" variant="primary" startIcon={<BoxIcon />}>
              Button Text
            </Button>
          </div>
        </ComponentCard>{" "}
        {/* Primary Button with Start Icon */}
        <ComponentCard title="Primary Button with Right Icon">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary" endIcon={<BoxIcon />}>
              Button Text
            </Button>
            <Button size="md" variant="primary" endIcon={<BoxIcon />}>
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Outline Button */}
        <ComponentCard title="Secondary Button">
          <div className="flex items-center gap-5">
            {/* Outline Button */}
            <Button size="sm" variant="outline">
              Button Text
            </Button>
            <Button size="md" variant="outline">
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Outline Button with Start Icon */}
        <ComponentCard title="Outline Button with Left Icon">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="outline" startIcon={<BoxIcon />}>
              Button Text
            </Button>
            <Button size="md" variant="outline" startIcon={<BoxIcon />}>
              Button Text
            </Button>
          </div>
        </ComponentCard>{" "}
        {/* Outline Button with Start Icon */}
        <ComponentCard title="Outline Button with Right Icon">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="outline" endIcon={<BoxIcon />}>
              Button Text
            </Button>
            <Button size="md" variant="outline" endIcon={<BoxIcon />}>
              Button Text
            </Button>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
