// todo: at some point, delete
export const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

// todo: move to env file
export const ENDPOINT = CORS_PROXY + "https://plan.japan-impact.ch/plan";

export const PRESENT = "present";

export const SHAPES = {
  RECTANGLE: "RECTANGLE",
  CIRCLE: "CIRCLE",
  TEXT: "TEXT",
} as const;

export const TAGS = {
  OBJECT: "object",
  ZONE: "zone",
};
