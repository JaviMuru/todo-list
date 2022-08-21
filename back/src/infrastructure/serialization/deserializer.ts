export interface Deserializer<Dto, Domain> {
  parse: (data: Dto) => Domain;
}
