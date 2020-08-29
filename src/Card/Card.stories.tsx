// Generated with util/create-component.js
import React from "react";
import Card from "./Card";
import { Story } from "@storybook/react/types-6-0";
import { CardArgs, WhiteCardArgs } from "./Card.types";
import {
  CCardHeader,
  CCardBody,
  CCard,
  CCardFooter,
  CLink,
  CCollapse,
  CFade,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

export default {
  title: "Components/Card",
  component: Card, //this is used to figure out the type of args
};

const Template: Story<WhiteCardArgs> = (args) => {
  return (
    <CCard borderColor={args.borderColor} accentColor={args.accentColor}>
      {args.showHeader && <CCardHeader>{args.headerText}</CCardHeader>}
      <CCardBody>{args.bodyText}</CCardBody>
      {args.showFooter && <CCardFooter>{args.footerText}</CCardFooter>}
    </CCard>
  );
};

export const Normal = Template.bind({});
Normal.args = {
  showHeader: true,
  showFooter: true,
  headerText: "Card title",
  footerText: "Card footer",
  bodyText: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
  nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
  volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`,
};

/**
 * Colored card
 */

const ColorTemplate: Story<CardArgs> = (args) => {
  return (
    <CCard color={args.color} className="text-white text-center">
      {args.showHeader && <CCardHeader>{args.headerText}</CCardHeader>}
      <CCardBody>{args.bodyText}</CCardBody>
      {args.showFooter && (
        <CCardFooter color={args.color} className="text-white text-center">
          {args.footerText}
        </CCardFooter>
      )}
    </CCard>
  );
};

export const Color = ColorTemplate.bind({});
Color.args = {
  ...Normal.args,
  bodyText: "Change colour by selecting the drop down in the Controls add-on",
  showFooter: false,
  color: "primary",
};

/**
 * Outlined card
 */

export const Outline = Template.bind({});
Outline.args = {
  ...Normal.args,
  borderColor: "primary",
  bodyText:
    "Change borderColor by selecting the borderColor in the Controls add-on.",
  showFooter: false,
};

/**
 * Accent card
 */
export const Accent = Template.bind({});
Accent.args = {
  ...Normal.args,
  accentColor: "primary",
  bodyText:
    "Change accentColor by selecting the accentColor in the Controls add-on",
  showFooter: false,
};

/**
 * Card with actions
 */
const ActionTemplate: Story<WhiteCardArgs> = (args) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showCard, setShowCard] = React.useState(true);
  return (
    <CFade in={showCard}>
      <CCard borderColor={args.borderColor} accentColor={args.accentColor}>
        <CCardHeader>
          Card actions
          <div className="card-header-actions">
            <CLink className="card-header-action">
              <CIcon name="cil-settings" />
            </CLink>
            <CLink
              className="card-header-action"
              onClick={() => setCollapsed(!collapsed)}
            >
              <CIcon
                content={
                  collapsed ? freeSet.cilChevronBottom : freeSet.cilChevronTop
                }
              />
            </CLink>
            <CLink
              className="card-header-action"
              onClick={() => setShowCard(false)}
            >
              <CIcon content={freeSet.cilXCircle} />
            </CLink>
          </div>
        </CCardHeader>
        <CCollapse show={collapsed}>
          <CCardBody>{args.bodyText}</CCardBody>
          {args.showFooter && <CCardFooter>{args.footerText}</CCardFooter>}
        </CCollapse>
      </CCard>
    </CFade>
  );
};

export const Action = ActionTemplate.bind({});
Action.args = {
  ...Normal.args,
  bodyText: "Click the icon in the top right of the Card",
  showFooter: false,
};
