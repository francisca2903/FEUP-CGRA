#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float timeFactor;

void main() {
	vec4 color = texture2D(uSampler, vec2(sin(timeFactor * 0.02),sin(timeFactor * 0.02)) + vTextureCoord);

	gl_FragColor = color;
}