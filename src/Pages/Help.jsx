import React from "react";
import firebase from "../firebase";
import { SpellInput } from "./SpellInput";

export function Help() {
  const [spells, setSpells] = React.useState([]);
  const [newSpellName, setNewSpellName] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("spells").get();
      setSpells(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("spells").add({ name: newSpellName });
  };

  return (
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Spell Name</label>
        <input
          value={newSpellName}
          onChange={(e) => setNewSpellName(e.target.value)}
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <button onClick={onCreate} class="btn btn-primary">
          Create
        </button>
      </div>

      {spells.map((spell) => (
        <li key={spell.name}>
          <SpellInput spell={spell} />
        </li>
      ))}
    </form>
  );
}

export default Help;
