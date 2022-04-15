function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const name = componentName.name.replace("Svg", "");
  const typeScriptTpl = template.smart({ plugins: ["typescript"] });
  return typeScriptTpl.ast`
    import * as React from 'react';

    const ${name}: React.ForwardRefExoticComponent<
      React.RefAttributes<SVGSVGElement>
    > = React.forwardRef<SVGSVGElement>((props, svgRef) => ${jsx});
    export default ${name};
  `;
}

module.exports = template;
