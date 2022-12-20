
export interface EcsContainer {
  id?: string;
  image?: Image;
  labels?: Record<string, unknown>;
  name?: string;
  runtime?: string;
}


interface Image {
  name?: string;
  tag?: string;
}

