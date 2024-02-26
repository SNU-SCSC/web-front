import React from "react";

// 애옹
type ExtractInnerType<T> = T extends React.ForwardRefExoticComponent<infer G> ? G : never;

export default ExtractInnerType;