// Generated with util/create-component.js
import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { LayoutProps } from "./Layout.types";
import Widget from "./Widget";
import CCol from "./CCol";
import CRow from "./CRow";

export default {
  title: "Presentation/Layout",
};

/**
 * Unresponsive Template
 */
const FullTemplate: Story<LayoutProps> = (args) => {
  return (
    <>
      <CRow>
        <CCol>
          This page doesn't use a responsive layout. Resize the screen and the
          components will take up the same number of columns.
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <Widget color="gradient-primary" />
        </CCol>
        <CCol>
          <Widget color="gradient-info" />
        </CCol>
        <CCol>
          <Widget color="gradient-danger" />
        </CCol>
        <CCol>
          <Widget color="gradient-warning" />
        </CCol>
      </CRow>
    </>
  );
};

export const Unresponsive = FullTemplate.bind({});

/**
 * Responsive Template
 */
const ResponsiveTemplate: Story<LayoutProps> = (args) => {
  return (
    <>
      <CRow>
        <CCol>
          <p>
            This page is responsive. Change the viewport by{" "}
            <a
              href="https://storybook.js.org/docs/react/essentials/viewport"
              target="_blank"
            >
              following these instructions
            </a>
            . After changing the viewport, you will see the layout change.
          </p>
          <p>
            Each CRow has 12 columns. CCol will take up a variable number of
            columns depending on the screen size. It is based on Bootstrap's
            grid system.
          </p>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="6" md="3">
          <Widget color="gradient-primary" />
        </CCol>
        <CCol sm="6" md="3">
          <Widget color="gradient-info" />
        </CCol>
        <CCol sm="6" md="3">
          <Widget color="gradient-danger" />
        </CCol>
        <CCol sm="6" md="3">
          <Widget color="gradient-warning" />
        </CCol>
      </CRow>
    </>
  );
};
export const Responsive = ResponsiveTemplate.bind({});
