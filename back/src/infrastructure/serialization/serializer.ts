export interface Serializer<Domain, Dto> {
  encode: (data: Domain) => Dto;
}
