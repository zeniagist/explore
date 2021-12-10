export default {
  name: "destinations",
  type: "document",
  title: "Destinations",
  fields: [
    {
      name: "location",
      type: "string",
      title: "Location",
      description: "Enter City, Country",
      validation: Rule => [Rule.required()],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "location",
        maxLength: 100,
      },
      validation: Rule => [Rule.required()],
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      validation: Rule => [Rule.required()],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: Rule => [Rule.required()],
    },
    {
      name: "tripDate",
      title: "Trip Date",
      type: "date",
      dateFormat: "MMMM D YYYY",
      validation: Rule => [Rule.required()],
    },
  ],
}
