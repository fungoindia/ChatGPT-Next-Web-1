import { ALL_MODELS, ModalConfigValidator, ModelConfig } from "../store";

import Locale from "../locales";
import { InputRange } from "./input-range";
import { List, ListItem, Select } from "./ui-lib";

export function ModelConfigList(props: {
  modelConfig: ModelConfig;
  updateConfig: (updater: (config: ModelConfig) => void) => void;
}) {
  return (
    <>
      <ListItem title={Locale.Settings.Model}>
        <Select
          value={props.modelConfig.model}
          onChange={(e) => {
            props.updateConfig(
              (config) =>
                (config.model = ModalConfigValidator.model(
                  e.currentTarget.value,
                )),
            );
          }}
        >
          {ALL_MODELS.map((v) => (
            <option value={v.name} key={v.name} disabled={!v.available} style={{display: "none"}}>
              {v.name}
            </option>
          ))}
          <option value="gpt-4">
              gpt-4
            </option>
        </Select>
      </ListItem>
     
    </>
  );
}
