import { Welcome } from "./Welcome";

// Converts JSON strings to/from your types
export class Convert {
  public toWelcome(id: string, name: string): Welcome {
    let x = new Welcome();

    x.id = id;
    x.name = name;

    return x;
  }
}
