import { StyleProp, ViewStyle } from "react-native";

export const priUtils = [
    {
      icon: {
        name: "user",
        size: 20,
        color: "#f53488",
      },
      text: "My account",
      iconSec: {
        name: "chevron-right",
        size: 14,
      },
    },
    {
      icon: {
        name: "commenting-o",
        size: 20,
        color: "#f53488",
      },
      text: "Chat",
      iconSec: {
        name: "chevron-right",
        size: 14,
      },
    },
];

export const secUtils = [
    {
      icon: {
        name: "heart-o",
        size: 20,
        color: "#f53488",
      },
      text: "Favourites",
      iconSec: {
        name: "chevron-right",
        size: 14,
      },
    },
    {
      icon: {
        name: "language",
        size: 20,
        color: "#f53488",
      },
      text: "Languages",
      iconSec: {
        name: "chevron-right",
        size: 14,
      },
    },
    {
      icon: {
        name: "bell",
        size: 20,
        color: "#f53488",
      },
      text: "Notification settings",
      iconSec: {
        name: "chevron-right",
        size: 14,
      },
    },
    {
      icon: {
        name: "share-alt",
        size: 20,
        color: "#f53488",
      },
      text: "Invite friends",
      iconSec: {
        name: "chevron-right",
        size: 14,
      },
    },
    {
      icon: {
        name: "ticket",
        size: 20,
        color: "#f53488",
      },
      text: "Your coupon",
      iconSec: {
        name: "chevron-right",
        size: 14,
      },
    },
    {
      icon: {
        name: "file-text",
        size: 20,
        color: "#f53488",
      },
      text: "Terms of services",
      iconSec: {
        name: "chevron-right",
        size: 14,
      },
    },
    {
      icon: {
        name: "question-circle",
        size: 20,
        color: "#f53488",
      },
      text: "Help & support",
      iconSec: {
        name: "chevron-right",
        size: 14,
      },
    },
];

type style = StyleProp<ViewStyle>;
  
export const base: style = {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    gap: 25,
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 8,
    paddingLeft: 8,
  };
export const background: style = {
     backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: 'absolute',
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
  };
  
export const baseStyle: style = {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    gap: 25,
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 8,
    paddingLeft: 8,
    marginTop: 20,
};