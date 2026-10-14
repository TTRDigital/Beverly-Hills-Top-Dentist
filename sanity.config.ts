"use client";

/**
 * Sanity Studio, embedded at /cms. Brand green, grouped sidebar, singletons
 * that cannot be duplicated or deleted.
 */
import { buildLegacyTheme, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes, singletonTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import { StudioIcon } from "./sanity/StudioIcon";

const theme = buildLegacyTheme({
  "--black": "#211d1d",
  "--white": "#ffffff",
  "--gray": "#6b7280",
  "--gray-base": "#6b7280",
  "--component-bg": "#ffffff",
  "--component-text-color": "#211d1d",
  "--brand-primary": "#20472c",
  "--default-button-color": "#6b7280",
  "--default-button-primary-color": "#20472c",
  "--default-button-success-color": "#31794b",
  "--default-button-warning-color": "#c58a1b",
  "--default-button-danger-color": "#c0392b",
  "--state-info-color": "#31794b",
  "--state-success-color": "#31794b",
  "--state-warning-color": "#c58a1b",
  "--state-danger-color": "#c0392b",
  "--main-navigation-color": "#20472c",
  "--main-navigation-color--inverted": "#ffffff",
  "--focus-color": "#31794b",
});

export default defineConfig({
  name: "beverly-hills-dental",
  title: "Beverly Hills Dental",
  basePath: "/cms",
  projectId,
  dataset,
  icon: StudioIcon,
  theme,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schemaTypes,
    // Singletons do not appear in the "Create new" menu.
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // Singletons can be edited and published, but not duplicated or deleted.
    actions: (input, context) =>
      singletonTypes.has(context.schemaType) ? input.filter(({ action }) => action && ["publish", "discardChanges", "restore"].includes(action)) : input,
  },
});
