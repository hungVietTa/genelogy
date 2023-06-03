export const extractInputData = (input) => {
  const output = {
    id: input.id,
    spouse_id: input.spouse_id,
    parent_id: input.parent_id,
    nth: input.nth,
    name: input.name,
    gender: input.gender,
    img_url: null
  };

  return output;
}
