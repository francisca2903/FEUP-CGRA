#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSamplerHeightMap;
uniform sampler2D uSamplerAltimetry;
varying vec3 verticalOffset;

void main() {
	vec4 color = texture2D(uSampler, vTextureCoord);
	vec4 altColor = texture2D(uSamplerAltimetry, vec2(0.0, 1.0 - verticalOffset.z));

	gl_FragColor = (color * 3.0 + altColor * 2.0) / 5.0;
}